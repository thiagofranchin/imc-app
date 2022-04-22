import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    alignItems: "center",
    backgroundColor: "#fff",    
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,    
    flex: 1,
    paddingTop: 30,
  },
  form: {
    width: "100%",    
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  formInput: {
    backgroundColor: "#f6f6f6",
    borderColor: "#e6e6e6",
    borderRadius: 50,
    borderWidth: 1,
    height: 40,
    margin: 12,
    paddingLeft: 10,
    width: "90%",
  },
  buttonCalculator: {
    alignItems: "center",
    backgroundColor: "#ff0043",
    borderRadius: 50,
    justifyContent: "center",
    margin: 30,
    marginLeft: 12,
    paddingBottom: 14,
    paddingTop: 14,
    width: "90%",
  },
  textButtonCalculator: {
    color: "#fff",
    fontSize: 20,
  },
  errorMessage: {
    color: "#ff0043",
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  showResultImc: {
    width: "100%",
    height: "50%",
  },
  listImcs: {
    marginTop: 20,
  },
  resultImcItem: {
    fontSize: 26,
    color: "red",
    height: 50,
    width: "100%",
    paddingLeft: 20,
  },
  textResultImcItemList: {
    fontSize: 16,
    color: "red"    
  }
})

export default styles;