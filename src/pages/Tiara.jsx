import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import SocialIcon from "../components/SocialIcon";

function Tiara() {
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
                    src="tiara-ftprofil.jpg"
                    alt="Profile"
                    className="w-32 h-32 mx-auto rounded-full border-4 border-white-500 mb-4"
                />

                <h1 className="text-2xl font-bold dark:text-white">
                    Tiara Nurfadilah
                </h1>

                <p className="text-gray-700 dark:text-gray-300 mt-2">
                    31 July 2007 | Jakarta Utara
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Teknologi Informasi | T2E
                </p>

                <p className="text-sm mt-4 text-gray-700 dark:text-gray-300 text-justify">
                    Saya adalah mahasiswa Teknologi Informasi Universitas Brawijaya yang memiliki minat di bidang UI/UX Design, digital content, dan media kreatif. Saya memiliki pengalaman dalam pengelolaan media sosial, pembuatan konten visual, serta dokumentasi kegiatan. Saat ini, saya sedang mengembangkan kemampuan dalam Figma, Canva, dan dasar UI/UX untuk menciptakan solusi digital yang menarik dan user-friendly.
                </p>

                <div className="flex justify-center gap-5 mt-5">

                    {/* GITHUB */}
                    <SocialIcon
                        href="https://github.com/tiaranurfadilah"
                        label="GitHub"
                        color="hover:brightness-75"
                        icon={
                            <img src="/icon/github.svg" alt="github" />
                        }
                    />

                    {/* INSTAGRAM */}
                    <SocialIcon
                        href="https://www.instagram.com/tiaraa_nfh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        label="Instagram"
                        color="hover:brightness-110"
                        icon={
                            <img src="/icon/instagram.svg" alt="instagram" />
                        }
                    />

                    {/* EMAIL */}
                    <SocialIcon
                        href="mailto:tiaranurfadilah450@gmail.com"
                        label="Email"
                        color="text-gray-700 hover:text-green-500"
                        icon={<Mail />}
                    />

                </div>
            </motion.div>
        </div>
    );
}

export default Tiara;
