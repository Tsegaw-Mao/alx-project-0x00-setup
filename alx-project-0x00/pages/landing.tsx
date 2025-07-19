import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight"> Landing Page </h1>
            <Card />

            <div className="space-x-4">
                {/* Small Buttons */}
                <Button title="Small Rounded-sm" styles="text-sm rounded-sm" />
                <Button title="Small Rounded-md" styles="text-sm rounded-md" />
                <Button title="Small Rounded-full" styles="text-sm rounded-lg rounded-full" />
            </div>

            <div className="space-x-4">
                {/* Medium Buttons */}
                <Button title="Medium Rounded-sm" styles="text-base rounded-sm" />
                <Button title="Medium Rounded-md" styles="text-base rounded-md" />
                <Button title="Medium Rounded-full" styles="text-base rounded-lg rounded-full" />
            </div>

            <div className="space-x-4">
                {/* Large Buttons */}
                <Button title="Large Rounded-sm" styles="text-lg rounded-sm" />
                <Button title="Large Rounded-md" styles="text-lg rounded-md" />
                <Button title="Large Rounded-full" styles="text-lg rounded-lg rounded-full" />
            </div>
        </div>
    )
}
export default Landing;