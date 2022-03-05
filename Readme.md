# react-native grpc client

This is a react native app that use grpc for authorization.The app is only support android(java) and there is no ios(objective-c) support.

This app has a backend server which has been created by go language.You must clone it and run the server for testing this app

## Getting started

### Server

> !! You must clone the server app. You can find it here [grpcGoServer](https://github.com/antinucleus/go-server-grpc)

> !! After cloned it you should start the server.I explain how to start server in its Readme file.

> !! After server started you can follow these steps for testing the app

### Client

> Install node_modules using **yarn** or **npm**

> Run the app `npx react-native run-android` or if you installed react-native you can run with `react-native run-android`

> If you run on simulator after app started you should type this command on your shell: `adb reverse tcp:50051 tcp:50051`

> Default port is 50051. If you change the port, for example 8080 then you should type this command on your shell: `adb reverse tcp:8080 tcp:50051`

> All is done... Default username is 'test' and password is '123'. You can test using these

#### Demo

Initial
![](https://github.com/antinucleus/react-native-grpc-client/blob/main/demoImages/demo1.png)
Final
![](https://github.com/antinucleus/react-native-grpc-client/blob/main/demoImages/demo2.png)
<img src="https://github.com/antinucleus/react-native-grpc-client/blob/main/demoImages/react-native-grpc.gif" width="400" height="750"/>

## How it works

There is `login.proto` file at `android/app/src/main/proto/login.proto`. This file is same as with server's proto file.

I added codes below into `android/app/build.gradle`

```
protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:3.17.3"
    }
    plugins {
        grpc {
            artifact = 'io.grpc:protoc-gen-grpc-java:1.41.0'
        }
    }
    generateProtoTasks {
        all().each { task ->
            task.builtins {
                java { option 'lite' }
            }
            task.plugins {
                grpc { option 'lite' }
            }
        }
    }
}
```

and in dependencies section

```
    implementation 'io.grpc:grpc-okhttp:1.41.0' // CURRENT_GRPC_VERSION
    implementation 'io.grpc:grpc-protobuf-lite:1.41.0' // CURRENT_GRPC_VERSION
    implementation 'io.grpc:grpc-stub:1.41.0' // CURRENT_GRPC_VERSION
    implementation 'org.apache.tomcat:annotations-api:6.0.53'
```

When you build the app using `react-native run-android` or `npx react-native run-android` proto files will be generated and located at `android/app/src/main/java/generated` .This directory will be appear on android studio.

I created java file for native module that access this proto files and use its variables. You can find it at `android/app/src/main/java/GrpClient.java` , `android/app/src/main/java/LoginActivity.java`
and `android/app/src/main/java/MyAppPackage.java`

I created `GrpcClient.ts` file that located at `src/GrpcClient.ts` file. This file has an interface `loginRequest`. I use it in LoginScreen.js. When user send,username password, host and port it will be try to connect the server if connection successful , then it will be check username and password.

If username and password is true app will be render Text which shows **You are authorized :)**
