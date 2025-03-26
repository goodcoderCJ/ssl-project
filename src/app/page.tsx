
import ProfileCard from "@/components/profileCard";




const profiles  = [
  { name: "Davina", age: 23, location: "Abuja", match: 85, image: "/images/Nft1.png",verified:true },
  { name: "Emily", age: 31, location: "Lagos", match: 80, image: "/images/Nft2.png",verified:true },
  { name: "John", age: 28, location: "Delta", match: 72, image: "/images/Nft3.png",verified:true },
  { name: "Davina", age: 23, location: "Abuja", match: 85,image:"/images/Nft4.png", verified: true },
  { name: "Emily", age: 31, location: "Lagos", match: 80,image:"/images/Nft5.png", verified: false },
  { name: "John", age: 28, location: "Delta", match: 72,image:"/images/Nft6.png", verified: true },
  { name: "Mads", age: 26, location: "", match: 77,image:"/images/Nft2.png", verified: false },
  { name: "Love", age: 26, location: "Lagos", match: 80,image:"/images/Image (9).png", verified: false },
  { name: "Karen", age: 23, location: "Abuja", match: 85,image:"/images/Nft1.png", verified: false },
  { name: "Sharon", age: 24, location: "Lagos", match: 80,image:"/images/Nft6.png", verified: false },
  { name: "Kevin", age: 30, location: "PH", match: 70,image:"/images/Nft5.png", verified: true },
  { name: "Lily", age: 25, location: "Lagos", match: 89,image:"/images/Nft3.png", verified: false },
  { name: "Vivian", age: 27, location: "Edo", match: 71,image:"/images/Nft4.png", verified: false },
  { name: "Jack", age: 30, location: "Lagos", match: 87,image:"/images/Nft2.png", verified: false },
  { name: "Dave", age: 26, location: "Lagos", match: 80,image:"/images/Nft1.png", verified: false }
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
          <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <p>Welcome, Temiloluwa</p>
          <div>
            <label className="mr-2">Relationship Type:</label>
            <select className="p-1 border rounded">
              <option>Dating</option>
            </select>
          </div>
        </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {profiles.map((profile, idx) => (
            <ProfileCard key={idx} {...profile} />
          ))}
        </div>
      </div>
  );
}
