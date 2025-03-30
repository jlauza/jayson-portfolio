import * as Avatar from "@radix-ui/react-avatar";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

export default function ClientFeedback({
  name,
  position,
  rating,
  feedback,
  image,
}) {
  const totalStars = 5;

  return (
    <div className="mx-auto w-full max-w-sm rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
      {/* Avatar & Name */}
      <div className="flex items-center gap-4">
        <Avatar.Root className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
          <Avatar.Image
            src={image || "https://randomuser.me/api/portraits/men/32.jpg"}
            alt={name}
            className="w-full h-full object-cover"
          />
          <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-700 text-xl">
            {name ? name.charAt(0) : "?"}
          </Avatar.Fallback>
        </Avatar.Root>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {name || "John Doe"}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {position || "CEO, TechCorp"}
          </p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex mt-4 gap-1 text-yellow-500">
        {[...Array(totalStars)].map((_, i) =>
          i < rating ? (
            <StarFilledIcon key={i} className="w-5 h-5" />
          ) : (
            <StarIcon key={i} className="w-5 h-5" />
          )
        )}
      </div>

      {/* Feedback Message */}
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        {feedback ||
          "This service has been exceptional! The team went above and beyond to meet our needs. Highly recommended!"}
      </p>
    </div>
  );
}
