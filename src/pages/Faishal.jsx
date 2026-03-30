import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import SocialIcon from "../components/SocialIcon";

function Faishal() {
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
                    src="faishal-ftprofil.JPG"
                    alt="Profile"
                    className="w-32 h-32 mx-auto rounded-full border-4 border-white-500 mb-4"
                />

                <h1 className="text-2xl font-bold dark:text-white">
                    Muhammad Faishal Nur Firdaus
                </h1>

                <p className="text-gray-700 dark:text-gray-300 mt-2">
                    08 September 2006 | Lumajang
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
                        href="https://github.com/muhammadfaishalnurf"
                        label="GitHub"
                        color="hover:brightness-75"
                        icon={
                            <img src="/icon/github.svg" alt="github" />
                        }
                    />

                    {/* INSTAGRAM */}
                    <SocialIcon
                        href="https://www.instagram.com/faishalfys_?igsh=aTNuYW43N2V2bmZs"
                        label="Instagram"
                        color="hover:brightness-110"
                        icon={
                            <img src="/icon/instagram.svg" alt="instagram" />
                        }
                    />

                    {/* EMAIL */}
                    <SocialIcon
                        href="mailto:faishal10rpl2@gmail.com"
                        label="Email"
                        color="text-gray-700 hover:text-green-500"
                        icon={<Mail />}
                    />

                </div>
            </motion.div>
        </div>
    );
}

export default Faishal;
