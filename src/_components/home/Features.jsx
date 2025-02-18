/* eslint-disable react/prop-types */
const Feature = ({ label, icon }) => {
    return (
      <div className="bg-white py-4 px-6 border mx-5 shadow flex items-center w-[30%]">
        <div className="text-2xl mr-5 h-14 w-14 rounded-full bg-teal-900 text-white flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold">{label}</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    );
  };
  
  export default Feature;