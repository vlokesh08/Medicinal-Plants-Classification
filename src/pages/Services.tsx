import description from "./JsonFiles/ServicesDescription.json";
import { DescriptionCard } from "./components/DescriptionCard";
const Services = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center m-5 p-4 gap-3"> 
      {
        description.map((service) => (
          <div key={service.id} className="flex flex-row">
            <DescriptionCard
              title={service.title}
              description={service.description}
              route={service.route}
              image={service.image}
            />
          </div>
        ))
      }
      </div>
    </>
  )
}

export default Services