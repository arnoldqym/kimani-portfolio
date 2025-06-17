// components/DesignModal.js
import Image from 'next/image';

type Design = {
  imageUrl: string;
  title: string;
  description: string;
};

type DesignModalProps = {
  design: Design | null;
  onClose: () => void;
};

const DesignModal: React.FC<DesignModalProps> = ({ design, onClose }) => {
  if (!design) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-3xl w-full">
        <div className="relative">
          <Image
            src={design.imageUrl}
            alt={design.title}
            width={1200}
            height={800}
            className="object-contain w-full"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{design.title}</h2>
          <p className="text-gray-700">{design.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DesignModal;