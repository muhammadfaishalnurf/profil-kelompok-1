import ProfileCard from "../components/ProfileCard";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="pt-28 md:pt-20 min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 p-6">
      
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8 dark:text-white"
      >
        Anggota Kelompok
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        <ProfileCard
          name="Muhammad Faishal Nur Firdaus"
          path="/muhammad-faishal-nur-firdaus"
          image="faishal-ftprofil.JPG"
        />

        <ProfileCard
          name="Evan"
          path="/evan"
          image="https://via.placeholder.com/150"
        />

        <ProfileCard
          name="Tiara"
          path="/tiara"
          image="https://via.placeholder.com/150"
        />

      </div>
    </div>
  );
}

export default Home;