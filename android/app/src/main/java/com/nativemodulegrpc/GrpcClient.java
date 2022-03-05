package com.nativemodulegrpc;
import android.util.Log;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class GrpcClient extends ReactContextBaseJavaModule {
  GrpcClient(ReactApplicationContext context) { super(context); }
  @Override
  public String getName() {
    return "GrpcClient";
  }

  @ReactMethod
  public void loginRequst(String username, Integer password, String host,
                          Integer port, Promise promise) {
    Log.d("GrpcClient", "Login Request method called with username: " +
                            username + " and password: " + password);
    try {
      String response = LoginActivity.login(username, password, host, port);
      promise.resolve(response);
    } catch (Exception e) {
      promise.reject("Connection error", e);
    }
  }
}
