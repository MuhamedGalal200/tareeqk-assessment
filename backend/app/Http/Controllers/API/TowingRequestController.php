<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TowingRequest;

class TowingRequestController extends Controller
{
    // GET /api/requests
    public function index()
    {
        return response()->json(TowingRequest::all(), 200);
    }

    // POST /api/requests
   public function store(Request $request)
{
    $data = $request->validate([
        'customer_name' => 'required|string',
        'location' => 'required|string',
        'note' => 'required|string',
    ]);

    $data['status'] = 'pending'; 

    $request = TowingRequest::create($data);

    return response()->json([
        'message' => 'Towing request created successfully',
        'data' => $request
    ], 201);
}
public function assign($id)
{
    $request = TowingRequest::findOrFail($id);
    $request->status = 'assigned';
    $request->save();

    return response()->json([
        'message' => 'Towing request assigned successfully',
        'data' => $request
    ]);
}


}
