
import React from "react";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image1 from "../assets/images/Image1.png";
import Rawmeat from "../assets/images/rawmeat.png";
import Fullchicken from "../assets/images/fullchicken.png";
import Intrologo from "../assets/images/intrologo.jpg";
import JeSimuleUnDevis from "../components/JeSimuleUnDevis";
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";
import BottomNav from "../components/BottomNav";
import Verifier from "../components/Verifier";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: "25px",
    gap: "10px",
  },
  card: {
    width: "120px",
    height: "180px",
    borderRadius: "8px",
    padding: "10px",
    paddingBottom: "25px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "180px",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  sectionheader: {
    textAlign: "left",
    margin: "20px",
    width: "Fixed 390px",
    height: "30px",
    padding: "0px 24px 0px 24px",
    gap: "0px",
    fontSize: "24px",
    top: "166.81px",
    color: "#2196f3",
  },
  buttontext: {
    width: "100%",
    height: "35px",
    padding: "8px 0",
    backgroundColor: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "24px",
  },
  logo: {
    width: "110px",
    height: "110px",
    margin: "auto",
    display: "block",
    marginBottom: "10px",
  },
  buttonlabel: {
    fontFamily: "Droid Sans",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "20px",
    textAlign: "center",
    borderRadius: "15px",
    backgroundColor: "#013438", // Deep green color
    color: "white", // White text color
    border: "none",
    cursor: "pointer",
    padding: "8px 0",
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px", // Add margin bottom for spacing
    paddingRight: "35px",
  },
  headerlabel: {
    fontFamily: "Droid Sans",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "20px",
    textAlign: "left",
    color: "#CF1B26",
    paddingLeft: "35px",
  },
}));

export default function AccueilTypedeviandeLivraison() {
  const classes = useStyles();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "product");
        const snapshot = await getDocs(colRef);
        const productsData = [];

        for (const doc of snapshot.docs) {
          const productData = doc.data();
          const imageUrl = await getDownloadURL(
            ref(storage, productData.image)
          );
          productsData.push({ ...productData, id: doc.id, imageUrl });
        }
        console.log("data", productsData);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <br />
      <br />
      <img src={Intrologo} alt="" className={classes.logo} />
      <div className={classes.headerContainer}>
        <div className={classes.headerlabel}>Livraison en cours ...</div>
        <Verifier /> {/* Placed Verifier component here */}
      </div>
      <div className={classes.sectionheader}>Que désirez-vous ?</div>
      <div className={classes.container}>

{products.map((product, index) => (
  <div key={index}>
<Link to={`/accueilParties?type=${product.name}`}>
<Card className={classes.card}>
          <div className={classes.content}>
            <img src={product.image} alt={product.name} className={classes.image} />
            <button className={classes.buttontext}>{product.name}</button>
          </div>
        </Card>
</Link>
  </div>
))}
      </div>
      <br />
      <br />
      <Link to="/AccueilParties">
        <JeSimuleUnDevis />
      </Link>
      <BottomNav />
    </div>
  );
}
