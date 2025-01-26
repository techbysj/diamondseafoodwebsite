// src/components/FrozenCrabDetails.js
import React from "react";
import { Card, CardContent } from "./Card"; // Adjust the path accordingly
import { Table, TableHead, TableRow, TableCell, TableBody } from "./Table"; // Adjust the path accordingly


const DataSheet = () => {
  return (
    <Card className="p-6 bg-white shadow-lg rounded-2xl mt-8">
      <CardContent>
        <h2 className="flex text-4xl font-thin justify-center align-middle items-center mb-4">
          Frozen Deep-Sea Crab Data Sheet
        </h2>
        <Table className="w-full">
          <TableHead>
            <TableRow>
              <TableCell className="font-semibold">Attribute</TableCell>
              <TableCell className="font-semibold">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className="font-semibold">Product Name</TableCell>
              <TableCell>Frozen Deep-sea Crab</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Scientific Name</TableCell>
              <TableCell>Chaceon Fenneri</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Fishing Area</TableCell>
              <TableCell>FAO Zone no. 51.5 – Kenyan Coastline</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Method of Catch</TableCell>
              <TableCell>Baskets</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Composition</TableCell>
              <TableCell>Whole freshly caught</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Type of Process</TableCell>
              <TableCell>Washing and freezing</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">
                End Product Characteristics
              </TableCell>
              <TableCell>
                Free from bacterial pathogens and no physical damage
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">
                Method of Preservation
              </TableCell>
              <TableCell>
                Treating with Sodium Metabisulphite and freezing
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Packaging</TableCell>
              <TableCell>
                Graded according to sizes and packed in cartons
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Net Weight</TableCell>
              <TableCell>10.0 KG</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Labeling</TableCell>
              <TableCell>
                Labels in English and in the language of destination
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Storage Condition</TableCell>
              <TableCell>To be stored at –18°C</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Shelf Life</TableCell>
              <TableCell>
                12 months from date of freezing when stored at –18°C
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Dispatch Method</TableCell>
              <TableCell>
                Shipped by sea in reefer container set at –20°C
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Intended Use</TableCell>
              <TableCell>To be fully cooked before consumption</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <img
          src="https://supremecrab.com/wp-content/uploads/2023/08/Frozen-Deepsea-on-plate-with-frozen-bag-behind.jpg"
          alt="Golden Deep-Sea Crab"
          className="w-full h-auto mt-6 rounded-lg shadow-md"
        />
      </CardContent>
    </Card>
  );
};

const FrozenCrabDetails = () => {
  return (
    <div className="container mx-auto p-4">
      <DataSheet />
    </div>
  );
};

export default FrozenCrabDetails;
