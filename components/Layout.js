import CssBaseline from '@mui/material/CssBaseline';
import Header from "@components/Header";
import Footer from "@components/Footer";


function Layout(props) {

  return (
    <div>
    <CssBaseline />
    <Header />
        {props.children}
    <Footer />
  </div>

  )
};

export default Layout;
