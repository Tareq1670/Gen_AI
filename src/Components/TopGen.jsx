import { getPhotos } from "@/lib/api";
import Card from "./Card";

const TopGen =async () => {
    const photos = await getPhotos();
    
    return (
        <div>
            <h2 className="text-3xl font-semibold my-4 underline mt-10">Top Generation</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    photos.slice(0,8).map(photo => <Card key={photo.id} photo={photo}/>)
                }
            </div>
        </div>
    );
};

export default TopGen;