export default {
  navbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "5vh"
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
  signout: {
    "& a": {
      textDecoration: "none"
    }
  }
};
