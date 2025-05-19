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
    marginTop: 2,
    flexDirection: "row",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  taskItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 3,
  },

  taskText: {
    fontSize: 16,
    color: "#333",
  },

  emptyContainer: {
    alignItems: "center",
    marginTop: 50,
  },

  emptyIcon: {
    fontSize: 50,
    marginBottom: 10,
    color: "#ccc",
  },

  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
  },

  emptySubText: {
    fontSize: 14,
    color: "#999",
    marginTop: 4,
  },
});
