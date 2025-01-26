import React from 'react'

const AboutProcess = () => {
  return ( <div className="p-6 bg-yellow-50 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-yellow-900 mb-4">Our Process</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li><strong>Receiving:</strong> Crabs are delivered in Styrofoam boxes or water tanks at 6°C.</li>
        <li><strong>Sorting:</strong> Live crabs are separated from dead ones for processing.</li>
        <li><strong>Grading:</strong> Crabs are graded based on size, health, and physical condition.</li>
        <li><strong>Holding:</strong> Graded crabs are kept in tanks with chilled seawater at 6°C.</li>
        <li><strong>Packing:</strong> Crabs are packed in Styrofoam boxes with ice packs for shipping.</li>
        <li><strong>Dispatch:</strong> Shipped by air, stored at 4°C to ensure optimal quality.</li>
      </ul>
    </div>
  );
};
export default AboutProcess