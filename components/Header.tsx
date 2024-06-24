import Image from 'next/image';
import Link from 'next/link';
const Header = () => {


    const navMenu = [
        {
            id: 1,
            name: "Homepage",
            link: "/"
        },
              {
            id: 1,
            name: "Offers",
            link: "/"
        }
              ,
              {
            id: 1,
            name: "Requests",
            link: "/"
        }
              ,
              {
            id: 1,
            name: "Deels",
            link: "/"
        }
    ]

    const navAuth = [
            {
            id: 1,
            name: "Login",
            link: "/"
        }
              ,
              {
            id: 1,
            name: "Sign up",
            link: "/"
        }
              ,
              {
            id: 1,
            name: "En ",
                  link: "/",
            icon: "^"
        }
    ]

   return (
      <main className="w-full flex justify-between  items-center fixed top-0  bg-opacity-10 backdrop-blur-md shadow-lg h-16 z-20">
         <div className="flex w-full px-12 justify-between items-center  shadow-custom">
            <div className=" pr-2">
               <Link href='/'>

               <Image src="/images/Logo-Deel-With-Me.png" alt="logo-image" className="" width={60} height={40} />
               </Link>
            </div>
            <div className="flex space-x-5 justify-center items-center">
             {navMenu.map((menu) => (
               <Link key={menu.id} href={menu.link}>
                  <span className="text-sm hover:text-gray-400">
                     {menu.name}
                  </span>
               </Link>
             ))}
                   <div className='pr-4' />
                    {navAuth.map((menu) => (
               <Link key={menu.id} href={menu.link}>
                  <span className="text-xs text-gray-500 hover:text-gray-400">
                     {menu.name}
                  </span>
               </Link>
           ))}
            </div>
            {/* <style jsx>{`
               .active-link {
                  color: #bf9221;
               }
            `}</style> */}
         </div>
      </main>
   );
};

export default Header;