import plants from "./JsonFiles/AdditionalPlants.json"
export const ListOfPlants = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 m-5 p-5">
        {plants.map((plant) => (
          <div key={plant.id} className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-bold">{plant.plant_name}</h2>
            <p>{plant.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
