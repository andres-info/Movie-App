import Head from "next/head";

import Navbar from "./components/navbar";

import SideMenu from "./components/sideMenu";

import CarouselHome from "./components/carousel";
import MovieList from "./components/MovieList.";

import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Home</title>
        </Head>

        <Navbar />

        <div className="home-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <SideMenu />
              </div>
              <div className="col-lg-9">
                <CarouselHome />

                <div className="row">
                  <MovieList />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
<style jsx>
  {`
  .home-page{
    padding-top: 25px;
  }`}
</style>
      </div>
    </>
  );
}
