import React, { createContext, useEffect, useRef, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dbUser, setDbUser] = useState("");
  const [loading, setLoading] = useState(true);

  /**
   * Log in by gmail
   */
  const googleProvider = new GoogleAuthProvider();
  const handleLogIn = (email) => {
    return signInWithPopup(auth, googleProvider);
  };

  /**
   * Log Out
   */
  const handleLogOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        console.log("SignOut Successfully");
      })
      .catch((error) => {
        console.log("Log Out error: ", error);
      });
  };

  /**
   * Check Current User start
   */
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  //   console.log("current user: ", user);

  /**
   * Check Current User end
   */

  /**
   * Toast start
   */
  const successfullyToast = (text) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: text,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  /**
   * Toast end
   */

  /**Dark Light Mode start */
  const [colorDep, setColorDep] = useState(true);
  const [color, setColor] = useState("dark");
  useEffect(() => {
    const mode = localStorage.getItem("mode");
    // console.log("mode: ", mode);
    if (mode == "light") {
      setColor("light");
    }
    if (mode == "dark") {
      setColor("dark");
    }
  }, [colorDep]);

  const handleSetDarkMode = () => {
    localStorage.setItem("mode", "dark");
    setColorDep(!colorDep);
  };
  const handleSetLightMode = () => {
    localStorage.setItem("mode", "light");
    setColorDep(!colorDep);
  };
  /**Dark Light Mode end */

  const modalRef = useRef(null);

  const text = `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis unde
        officia explicabo itaque consequuntur quas ab amet. Dolorum dolore dolor
        quas suscipit ad quibusdam facilis voluptatem quo. Placeat accusamus
        esse perspiciatis officiis recusandae reiciendis cupiditate fugit
        excepturi reprehenderit iusto eligendi sed aliquid ut, iste natus,
        sapiente voluptate exercitationem libero magni quod? Numquam corporis
        nesciunt in natus sequi, tempore iusto nam modi velit cumque
        reprehenderit enim voluptates quas soluta cum amet eaque assumenda
        quisquam placeat ratione itaque perferendis! Asperiores eum nostrum
        obcaecati non eligendi quae quos vero aperiam excepturi odio! Quia neque
        dignissimos reprehenderit sint temporibus perferendis deserunt
        cupiditate recusandae qui deleniti ratione, nam dolorem, dolores
        assumenda labore et, itaque blanditiis voluptates laudantium molestiae
        totam a distinctio quis iste. Porro in iusto sit, delectus ea provident,
        perferendis perspiciatis iste facere voluptatem, ratione alias eaque ab
        quas impedit natus ducimus. Provident, quasi! Nobis dolores veniam est
        odit velit, provident quaerat, minus, excepturi reiciendis alias
        reprehenderit ratione corporis nemo optio fugiat dolor nulla modi
        facere! Aperiam, labore! Ullam, dolore error velit odit provident
        eveniet magni alias aperiam architecto et eaque explicabo quam autem,
        voluptas, quos fugit molestiae harum. Mollitia molestias ut eius dolor
        nam eaque sint laudantium harum voluptas autem totam rerum iusto
        pariatur obcaecati dolores quia, cum cupiditate ullam blanditiis sed
        impedit quaerat vel at quisquam. Dignissimos id fugit autem odio eum,
        praesentium ipsum impedit consectetur voluptatibus vero explicabo
        blanditiis repellendus inventore incidunt dolores esse, sequi
        laudantium. Deleniti, dolor minima distinctio expedita harum dolorum
        nobis similique quos commodi fugit? Ducimus repellat eligendi ab
        obcaecati dolorum suscipit quibusdam aspernatur eos, minus laborum animi
        amet veritatis voluptatibus beatae iure quo cumque voluptates, explicabo
        deleniti nostrum ipsam tempora? Harum ab iure neque, maxime, quae quos
        perferendis reiciendis nemo vero dolorem distinctio debitis eligendi
        labore quo magnam, pariatur accusantium tempora? Nesciunt officia
        voluptatem maiores possimus, amet quibusdam pariatur ipsa? Similique
        laborum temporibus nostrum cumque numquam? Exercitationem quam ex sequi
        expedita cupiditate modi fugiat neque recusandae culpa quis dicta
        nostrum, aliquam ad consequuntur vel a laborum sed doloremque
        consequatur nobis id dignissimos voluptatum esse delectus. Magnam
        aliquid deserunt consectetur officia ad accusamus sapiente minima rem?
        Voluptatibus deserunt labore consectetur magni, quos iure repellendus
        accusamus corrupti officiis, sunt eius fuga hic illum omnis. Pariatur
        harum est sit sunt, recusandae eaque beatae quisquam. Architecto rerum
        quod repellendus, facilis eaque dolore enim mollitia ea ducimus
        doloremque recusandae voluptatibus, tenetur quasi pariatur ut id quo
        autem! Tempore rerum nulla explicabo voluptatem magnam eligendi in ea
        qui nisi obcaecati maxime, repudiandae neque, vel, pariatur repellendus
        quaerat consectetur omnis voluptates placeat? Obcaecati officia error
        vel tempore? Sequi tempora sapiente odio, tenetur fugiat illo? Iusto
        commodi molestias earum, mollitia officiis, vero soluta quisquam veniam
        laudantium voluptas architecto eveniet quod labore odit sequi incidunt
        quidem. Dolores sequi quae ipsam sunt sint eaque, laudantium hic dicta
        quia, placeat deserunt quisquam nostrum voluptatum porro. Blanditiis
        repellat velit possimus odit porro, nemo voluptatem corrupti, modi at
        dolor natus tempore reiciendis similique voluptate consectetur.
        Temporibus iusto totam velit deleniti quo aperiam dignissimos odio quis
        voluptatum eos impedit eius qui odit sint, labore voluptate ea, ullam
        dolore veniam ipsum. Enim perspiciatis quam maxime dolorem itaque
        nostrum hic eius aliquam aperiam quidem libero earum cumque iste vel
        accusamus dolore asperiores impedit qui, amet sit error, necessitatibus
        doloribus. Quibusdam dicta tempora incidunt? Ipsam ea debitis dicta sint
        molestiae error consequatur a sequi quidem deleniti quaerat veritatis
        asperiores necessitatibus aliquam harum ipsa, ut ipsum quasi quae
        obcaecati sapiente praesentium! Ipsa labore eligendi maiores, laborum
        reprehenderit reiciendis accusamus doloribus perferendis earum cumque.
        Corporis eum voluptatum facere aliquid alias deserunt, sunt eos suscipit
        vitae labore, ea asperiores velit, beatae dolores repellendus sed? Sint,
        laudantium ipsa debitis voluptas deleniti, perspiciatis id quidem esse,
        molestias ducimus est. Voluptatem quis deleniti enim accusantium
        dignissimos laborum veritatis? Impedit nihil pariatur fuga consectetur!
        Perferendis doloremque, explicabo a minus amet veniam itaque omnis eos!
        Repudiandae officia delectus eaque, quam incidunt autem, nostrum natus
        tenetur neque atque, est laboriosam debitis iure cumque et. Minus
        doloremque veritatis beatae quos eos dolor ipsa pariatur aliquid alias
        quis. Veniam reprehenderit accusantium aperiam dicta rem ut modi nihil.
        Praesentium cupiditate provident doloremque nostrum hic dicta mollitia
        culpa laboriosam magnam, vero in cumque, maxime magni eos autem beatae
        eligendi recusandae error dolorem labore repellendus aperiam laudantium
        nihil?`;

  const authInfo = {
    user,
    loading,
    handleLogIn,
    handleLogOut,
    handleSetDarkMode,
    handleSetLightMode,
    color,
    successfullyToast,
    modalRef,
    text,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
