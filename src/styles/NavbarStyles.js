export default {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "5vh",
    backgroundColor: "cornflowerblue",
    border: "0.1rem solid #333"
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "rgba(0, 212, 255, 1)",
    fontFamily: '"Roboto", sans-serif',
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black"
    }
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    "& addspot": {
      padding: "1rem"
    },
    "& signout": {
      padding: "1rem",
      "& a": {
        textDecoration: "none"
      }
    }
  }
};
