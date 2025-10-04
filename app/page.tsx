import Hero from "./components/Hero";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import PageLoad from "./components/framer/PageLoad";


const Home = async () => {
  return (
    <PageLoad>
      

      <div className="flex  overflow-hidden relative z-30">
        {/* left scrollbar */}
        {/* <div className="hidden lg:block bg-foreground">
          <div className="flex  items-center h-screen lg:w-[192px] md:w-[156px] ">
            <div className="fixed overflow-hidden ">
              <Sidebar />
            </div>
          </div>
        </div> */}
        
        {/* right main page */}
        <main className="flex relative flex-col gap-24 flex-1 z-10 w-full sm:px-18  px-6">
          
          {/* hero */}
          <Hero />
          <About />
        </main>
      </div>
    </PageLoad>
  );
};
export default Home;
