import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  authorized: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#DDD"
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#00af10',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  loading: {
    textAlign: "center",
    color: "#fff",
    paddingTop: 10
  },
  outercover: {
    marginBottom: 20,
  },
  textFooter: {
    color: '#000',
    fontSize: 18,
  },
  textHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#000',
  },
});
