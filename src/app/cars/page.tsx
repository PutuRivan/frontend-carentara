import { SearchBar } from "@/components/cars/SearchBar";
import { ResultsGrid } from "@/components/cars/ResultsGrid";
export default function CarsPage() {
  return (
    <>
      <div className="mt-16">
        <SearchBar />
      </div>
      <ResultsGrid />
    </>
  )
}

