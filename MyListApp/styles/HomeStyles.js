import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    padding: 20,
    color: "",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#555",
    marginBottom: 30,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#4CAF50",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },

  button: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  }
});
