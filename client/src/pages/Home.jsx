import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[url('/bg_img.png')] bg-cover bg-center">
      <NavBar />
      <Header />
    </div>
  );
};
export default Home;
