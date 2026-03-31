import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import SocialIcon from "../components/SocialIcon";

function Evan() {
    return (
        <div className="pt-28 md:pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 dark:from-gray-900 dark:to-gray-800 p-4">

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="backdrop-blur-lg bg-white/70 dark:bg-white/10 rounded-2xl shadow-xl p-6 max-w-md w-full text-center"
            >

                <motion.img
                    whileHover={{ scale: 1.1 }}
                    src="evan-ftprofil.JPG"
                    alt="Profile"
                    className="w-32 h-32 mx-auto rounded-full border-4 border-white-500 mb-4"
                />

                <h1 className="text-2xl font-bold dark:text-white">
                    Evan Swardana Adinata
                </h1>

                <p className="text-gray-700 dark:text-gray-300 mt-2">
                    10 November 2006 | Tuban
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Teknologi Informasi | T2E
                </p>

                <p className="text-sm mt-4 text-gray-700 dark:text-gray-300 text-justify">
                    Saya adalah mahasiswa Universitas Brawijaya Prodi Teknologi Informasi Fakultas Vokasi yang memiliki minat dalam
                    pengembangan web modern. Saya fokus pada frontend dan backend
                    menggunakan React dan Laravel. Saya juga memiliki usaha kuliner dan
                    tertarik mengembangkan sistem digital untuk meningkatkan efisiensi
                    bisnis.
                </p>

                <div className="flex justify-center gap-5 mt-5">

                    {/* GITHUB */}
                    <SocialIcon
                        href="https://github.com/eadinata2006-arch"
                        label="GitHub"
                        color="hover:brightness-75"
                        icon={
                            <img src="/icon/github.svg" alt="github" />
                        }
                    />

                    {/* INSTAGRAM */}
                    <SocialIcon
                        href="https://www.instagram.com/epanlagi_?igsh=OTBkNmt3bzYybjBp&utm_source=qr"
                        label="Instagram"
                        color="hover:brightness-110"
                        icon={
                            <img src="/icon/instagram.svg" alt="instagram" />
                        }
                    />

                    {/* EMAIL */}
                    <SocialIcon
                        href="mailto:eadinata2006@gmail.com"
                        label="Email"
                        color="text-gray-700 hover:text-green-500"
                        icon={<Mail />}
                    />

                </div>
            </motion.div>
        </div>
    );
}

export default Evan;
