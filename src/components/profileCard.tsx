import Image from "next/image";
interface ProfileCardProps {
    name: string;
    age: number;
    location: string;
    match: number;
    image: string;
    verified: boolean
  }
  
  const ProfileCard: React.FC<ProfileCardProps> = ({ name, age, location, match, image, verified}) => {
   
    return (
      <div className="border rounded-lg p-4 shadow">
        <Image src={image} alt={name} width={300} height={200} className="w-full h-40 object-cover rounded-md" />
        <h2 className="text-lg font-bold mt-2">{name}, {age}</h2>
        <p className="text-gray-500">{location}</p>
        <p className="text-green-600 font-semibold">{match}% Match</p>
        {verified && <p className="text-green-500">✔ Verified Address</p>}
        <button className="bg-red-500 text-white px-4 py-1 mt-2 rounded-md">More Info</button>
      </div>
    );
  };
  
  export default ProfileCard;