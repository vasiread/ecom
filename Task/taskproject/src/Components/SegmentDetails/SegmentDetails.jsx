import React, { useContext, useState } from "react";
import "./SegmentDetails.css";
import { SegmentContext } from "../../Context/segmentContext";

const schemaOptions = [
  { value: "first_name", label: "First Name" },
  { value: "last_name", label: "Last Name" },
  { value: "gender", label: "Gender" },
  { value: "age", label: "Age" },
  { value: "account_name", label: "Account Name" },
  { value: "city", label: "City" },
  { value: "state", label: "State" },
];

const SegmentDetails = () => {
  const { setIsSegmentOpen } = useContext(SegmentContext);
  const [segmentName, setSegmentName] = useState("");
  const [schemas, setSchemas] = useState([]);
  const [selectedSchema, setSelectedSchema] = useState("");

  const segmentClose = () => setIsSegmentOpen(false);

  const handleAddSchema = () => {
    if (!selectedSchema) return;
    if (schemas.includes(selectedSchema)) return;
    setSchemas((prev) => [...prev, selectedSchema]);
    setSelectedSchema("");
  };

  const handleSchemaChange = (index, value) => {
    const updated = [...schemas];
    updated[index] = value;
    setSchemas(updated);
  };

  const handleRemoveSchema = (index) => {
    const updated = schemas.filter((_, i) => i !== index);
    setSchemas(updated);
  };

  const availableOptions = schemaOptions.filter(
    (opt) => !schemas.includes(opt.value)
  );

  const handleSaveSegment = () => {
    const payload = {
      segment_name: segmentName,
      schema: schemas.map((s) => {
        const option = schemaOptions.find((o) => o.value === s);
        return { [option.value]: option.label };
      }),
    };

    console.log("Payload to send:", payload);
  };

  return (
    <div className="segmentdetails">
      <div className="header" onClick={segmentClose}>
        &lt; <p>Saving Segment</p>
      </div>

      <div className="segmentdiv">
        <label htmlFor="name" id="labelname">
          Enter the Name of the Segment
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name of the Segment"
          value={segmentName}
          onChange={(e) => setSegmentName(e.target.value)}
        />

        <select
          value={selectedSchema}
          onChange={(e) => setSelectedSchema(e.target.value)}
        >
          <option value="">Add schema to segment</option>
          {availableOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <p id="addschema" onClick={handleAddSchema}>
          + Add new schema
        </p>

        <div className="bluebox">
          {schemas.map((schema, index) => (
            <div key={index} className="schema-item">
              <select
                value={schema}
                onChange={(e) => handleSchemaChange(index, e.target.value)}
              >
                <option value="">Select schema</option>
                {schemaOptions.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    disabled={
                      schemas.includes(opt.value) && opt.value !== schema
                    }
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
              <button id="cross" onClick={() => handleRemoveSchema(index)}>x</button>
            </div>
          ))}
        </div>
      </div>

      <div className="segmentfooter">
        <button onClick={handleSaveSegment}>Save the Segment</button>
        <button onClick={segmentClose}>Cancel</button>
      </div>
    </div>
  );
};

export default SegmentDetails;
