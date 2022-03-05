import {NativeModules} from 'react-native';
const {GrpcClient} = NativeModules;

interface GrpcClientInterface {
  loginRequst(username:string,password:Int32Array,host:string,port:Int32Array):void;
}
export default GrpcClient as GrpcClientInterface;
