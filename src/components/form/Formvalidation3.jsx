import { useState } from "react";
import { useForm } from "react-hook-form";


export const Formvalidation3=() => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [errors, setErrors] = useState({});

  const data = {
    India: {
      Gujarat: ["Surat", "Ahmedabad", "Vadodara"],
      Maharashtra: ["Mumbai", "Pune", "Nagpur"],
      Rajasthan: ["Jaipur", "Udaipur"]
    },
    USA: {
      California: ["Los Angeles", "San Diego"],
      Texas: ["Houston", "Dallas"]
    },
    UK: {


      England: ["London", "Manchester"],
      Scotland: ["Edinburgh", "Glasgow"]
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!country) newErrors.country = "Please select country";
    if (!state) newErrors.state = "Please select state";
    if (!city) newErrors.city = "Please select city";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(`Country: ${country}, State: ${state}, City: ${city}`);
    }
  };

  return (
    <div style={{textAlign:"center"}}>
    <form onSubmit={handleSubmit} style={{ width: "300px",  }}>
      
      <label>Country</label>
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          setState("");
          setCity("");
        }}
      >
        <option value="">Select Country</option>
        {Object.keys(data).map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}

      {/* State */}
      <label>State</label>
      <select
        value={state}
        onChange={(e) => {
          setState(e.target.value);
          setCity("");
        }}
        disabled={!country}
      >
        <option value="">Select State</option>
        {country &&
          Object.keys(data[country]).map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
      </select>
      {errors.state && <p style={{ color: "red" }}>{errors.state}</p>}

      {/* City */}
      <label>City</label>
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={!state}
      >
        <option value="">Select City</option>
        {state &&
          data[country][state].map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
      </select>
      {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}

      <button type="submit" style={{ marginTop: "10px" }}>
        Submit
      </button>
    </form>
    </div>
  );
}
