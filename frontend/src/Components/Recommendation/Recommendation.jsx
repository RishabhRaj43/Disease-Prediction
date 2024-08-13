import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../Loading/Loading";

const Recommendation = () => {
  const [arr, setArr] = useState([
    "Itching",
    "Skin Rash",
    "Nodal Skin Eruptions",
    "Continuous Sneezing",
    "Shivering",
    "Chills",
    "Joint Pain",
    "Stomach Pain",
    "Acidity",
    "Ulcers on Tongue",
    "Muscle Wasting",
    "Vomiting",
    "Burning Micturition",
    "Spotting Urination",
    "Fatigue",
    "Weight Gain",
    "Anxiety",
    "Cold hands and Feets",
    "Mood Swings",
    "Weight Loss",
    "Restlessness",
    "Lethargy",
    "Patches in Throat",
    "Irregular Sugar Level",
    "Cough",
    "High Fever",
    "Sunken Eyes",
    "Breathlessness",
    "Sweating",
    "Dehydration",
    "Indigestion",
    "Headache",
    "Yellowish Skin",
    "Dark Urine",
    "Nausea",
    "Loss of Appetite",
    "Pain behind the Eyes",
    "Back Pain",
    "Constipation",
    "Abdominal Pain",
    "Diarrhoea",
    "Mild Fever",
    "Yellow Urine",
    "Yellowing of Eyes",
    "Acute Liver Failure",
    "Fluid Overload",
    "Swelling of Stomach",
    "Swelled Lymph Nodes",
    "Malaise",
    "Mlurred and Distorted Vision",
    "Phlegm",
    "Throat Irritation",
    "Redness of Eyes",
    "Sinus Pressure",
    "Runny Nose",
    "Congestion",
    "Chest Pain",
    "Weakness in Limbs",
    "Fast Heart Rate",
    "Pain during Bowel Movements",
    "Pain in Anal Region",
    "Bloody Stool",
    "Irritation in Anus",
    "Neck Pain",
    "Dizziness",
    "Cramps",
    "Bruising",
    "Obesity",
    "Swollen Legs",
    "Swollen Blood Vessels",
    "puffy_face_and_eyes",
    "enlarged_thyroid",
    "brittle_nails",
    "swollen_extremeties",
    "excessive_hunger",
    "extra_marital_contacts",
    "drying_and_tingling_lips",
    "slurred_speech",
    "knee_pain",
    "hip_joint_pain",
    "muscle_weakness",
    "stiff_neck",
    "swelling_joints",
    "movement_stiffness",
    "spinning_movements",
    "loss_of_balance",
    "unsteadiness",
    "weakness_of_one_body_side",
    "loss_of_smell",
    "bladder_discomfort",
    "foul_smell_of_urine",
    "continuous_feel_of_urine",
    "passage_of_gases",
    "internal_itching",
    "toxic_look_(typhos)",
    "depression",
    "irritability",
    "muscle_pain",
    "altered_sensorium",
    "red_spots_over_body",
    "belly_pain",
    "abnormal_menstruation",
    "dischromic_patches",
    "watering_from_eyes",
    "increased_appetite",
    "polyuria",
    "family_history",
    "mucoid_sputum",
    "rusty_sputum",
    "lack_of_concentration",
    "visual_disturbances",
    "receiving_blood_transfusion",
    "receiving_unsterile_injections",
    "Coma",
    "stomach_bleeding",
    "distention_of_abdomen",
    "history_of_alcohol_consumption",
    "fluid_overload",
    "blood_in_sputum",
    "prominent_veins_on_calf",
    "palpitations",
    "painful_walking",
    "pus_filled_pimples",
    "blackheads",
    "scurring",
    "skin_peeling",
    "silver_like_dusting",
    "Small Dents In Nails",
    "Inflammatory Nails",
    "Blister",
    "Red Sore Around Nose",
    "Yellow Crust Ooze",
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedItems, setCheckedItems] = useState(new Array(132).fill(0));
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("tab1");
  const [checked, setChecked] = useState("Disease");
  const [diseaseInfo, setDiseaseInfo] = useState({});

  const funFacts = [
    "The human nose can detect over 1 trillion different smells. 👃",
    "Your body has enough iron in it to make a nail that's 3 inches long. 🧲",
    "The human body contains about 37.2 trillion cells. 🔬",
    "Your skin is the largest organ in your body. 🧑‍⚕️",
    "The average human heart beats around 100,000 times a day. ❤️",
    "Humans share about 60% of their DNA with bananas. 🍌",
    "A sneeze travels out of your nose at over 100 miles per hour. 🌬️",
    "Your bones are constantly being broken down and rebuilt. 🦴",
    "The human brain is about 75% water. 🧠💧",
    "On average, you produce about 1 to 1.5 quarts of saliva each day. 💦",
  ];

  const handleCheckboxChange = (index) => {
    // console.log(index);
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = updatedCheckedItems[index] === 1 ? 0 : 1;
    setCheckedItems(updatedCheckedItems);
    // console.log(checkedItems);
  };

  const handleClick = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/predict",
        checkedItems
      );

      console.log(res.data.medication);
      const dietString = res.data.medication[0];
      let dietList = dietString.replace(/[\[\]']+/g, "").split(", ");
      // console.log(dietList);

      setDiseaseInfo(res.data);
      // console.log(diseaseInfo.description);
      setLoading(true);

      toast.success("Predicted Successfully!!");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const filteredItems = arr.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="max-w-screen container mx-auto md:px-20 px-4 mt-20 space-y-5 mb-16">
        <h1 className="text-4xl font-semibold">
          Our <span className="text-accent"> Machine Learning Model</span>
        </h1>

        <div role="tablist" className="tabs tabs-lifted w-full ">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className={`tab text-3xl ${
              checked === "Disease" ? "text-[#0079FF]" : ""
            } `}
            aria-label="Disease"
            checked={checked === "Disease"}
            onChange={() => setChecked("Disease")}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <div className="grid grid-cols-4 gap-4 grid-rows-2">
              {filteredItems.map((item, index) => {
                const ogIndex = arr.indexOf(item);
                return (
                  <div
                    className={`flex items-center space-x-2 space-y-2`}
                    key={ogIndex}
                  >
                    <div className="form-control w-full">
                      <label className="cursor-pointer label space-x-1">
                        <span className="label-text">{item}</span>
                        <input
                          type="checkbox"
                          checked={checkedItems[ogIndex] === 1 ? true : false}
                          onChange={() => handleCheckboxChange(ogIndex)}
                          className="checkbox checkbox-accent"
                        />
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="btn btn-primary w-full" onClick={handleClick}>
              Submit
            </button>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className={`tab text-3xl ${
              checked === "Recommendation" ? "text-[#0079FF]" : ""
            } `}
            aria-label="Recommendation"
            onChange={() => setChecked("Recommendation")}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {!loading ? (
              <>
                <div className="justify-center items-center mb-[-250px]">
                  <h1 className="text-4xl font-semibold mb-6 text-secondary">
                    Pls Enter the Symptoms For Medication...
                  </h1>
                  <h1 className="text-[#3F72AF] text-3xl mb-2">Fun Fact</h1>
                  {funFacts[Math.floor(Math.random() * funFacts.length)]}
                  <div className="mt-[-122px]">
                    <Loading />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title text-2xl font-medium text-primary">
                    Description
                  </div>
                  <div className="collapse-content mt-2">
                    <p>{diseaseInfo.description}</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-2xl font-medium text-primary">
                    Workout
                  </div>
                  <div className="collapse-content mt-2">
                    <p>
                      {diseaseInfo.workout.map((item, ind) => (
                        <li key={ind}>{item}</li>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-2xl font-medium text-primary">
                    Diets to Follow
                  </div>
                  <div className="collapse-content">
                    <p>
                      {diseaseInfo.diets[0]
                        .replace(/[\[\]']+/g, "")
                        .split(", ")
                        .map((item, ind) => (
                          <li key={ind}>{item}</li>
                        ))}
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-2xl font-medium text-primary">
                    Medications
                  </div>
                  <div className="collapse-content">
                    <p>
                      {diseaseInfo.medication[0]
                        .replace(/[\[\]']+/g, "")
                        .split(", ")
                        .map((item, ind) => (
                          <li key={ind}>{item}</li>
                        ))}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {loading && (
        <div className="flex justify-center">
          <div className="mx-3 flex justify-center">
            <div className="text-3xl font-semibold">Your Diagnosis:-</div>
          </div>
          <div className="text-3xl font-semibold">
            {"    "}
            {diseaseInfo.disease}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommendation;
