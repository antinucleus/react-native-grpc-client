package com.nativemodulegrpc;

import io.grpc.ConnectivityState;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import login.LoginRequest;
import login.LoginResponse;
import login.LoginServiceGrpc;

public class LoginActivity {
    public static String login(String username,Integer password,String host,Integer port){
        ManagedChannel channel = ManagedChannelBuilder.forAddress(host,port).usePlaintext().build();
        LoginServiceGrpc.LoginServiceBlockingStub stub = LoginServiceGrpc.newBlockingStub(channel);
        LoginRequest request = LoginRequest.newBuilder().setUsername(username).setPassword(password).build();
        LoginResponse response = stub.login(request);
        String res=response.getResult();
        return  res;
    }
}
