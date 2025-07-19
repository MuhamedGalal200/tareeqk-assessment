import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  Linking,
} from 'react-native';
import axios from 'axios';

interface Order {
  id: number;
  customer_name: string;
  location: string;
  note: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export default function OrdersScreen() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/requests');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
      Alert.alert('Error', 'An error occurred while accepting the request');
    } finally {
      setLoading(false);
    }
  };

  const assignRequest = async (id: number) => {
    try {
      await axios.put(`http://localhost:8000/api/requests/${id}/assign`);
      fetchOrders();
    } catch (error) {
      console.error('Error assigning request:', error);
      Alert.alert('Error', 'An error occurred while accepting the request');
    }
  };
  const openInMap = (location: string) => {
  const [lat, lng] = location.split(',').map((s) => s.trim());
  const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  Linking.openURL(url);
};


  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 10000);
    return () => clearInterval(interval);
  }, []);

  const renderItem = ({ item }: { item: Order }) => (
    <View style={styles.card}>
      <Text style={styles.name}>Name : {item.customer_name}</Text>
<TouchableOpacity onPress={() => openInMap(item.location)}>
  <Text style={styles.mapLink}>📍Location : {item.location}</Text>
</TouchableOpacity>
      <Text style={styles.info}>Notes : {item.note}</Text>
      <Text style={styles.status}> Status: {item.status}</Text>
      <Text style={styles.date}>🕒 {new Date(item.created_at).toLocaleString()}</Text>

      {item.status === 'pending' && (
        <TouchableOpacity onPress={() => assignRequest(item.id)}>
          <Text style={styles.button}>Aproove Oroder</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 100 }} />;
  }

  return (
    
    <View style={styles.container}>
      {orders.length === 0 && !loading && (
  <Text style={{ textAlign: 'center', marginTop: 20, color: '#777' }}>
    No Orders Found
  </Text>
)}

      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
  },
  list: {
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    marginTop: 5,
    color: '#555',
  },
  status: {
    marginTop: 5,
    color: '#0066cc',
    fontWeight: 'bold',
  },
  date: {
    marginTop: 5,
    color: '#888',
    fontSize: 12,
  },
  button: {
    marginTop: 10,
    color: '#fff',
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    textAlign: 'center',
    overflow: 'hidden',
  },
  mapLink: {
  marginTop: 5,
  color: '#007AFF',
  textDecorationLine: 'underline',
},

});
