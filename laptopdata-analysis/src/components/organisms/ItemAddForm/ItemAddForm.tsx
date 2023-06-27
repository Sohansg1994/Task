import { useState, useEffect } from "react";
import laptopStore from "../../../store";
import FormLabelInput from "../../molecules/formLabelInput/FormLabelInput";
import FormLabelNumberInput from "../../molecules/formLabelNumberInput/FormLabelNumberInput";

export default function ItemAddForm(props: any) {
  const onClose = props.onClose;

  const rawData = laptopStore((state) => state.rawData);
  const addLaptop = laptopStore((state) => state.addLaptop);
  const setTableData = laptopStore((state) => state.setTableData);
  const [isAddData, setIsAddData] = useState<boolean>(false);
  const [brand, setBrand] = useState<string>("");
  const [product, setProduct] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [screenSize, setScreenSize] = useState<number>();
  const [screenResolution, setScreenResolution] = useState<string>("");
  const [processor, setProcessor] = useState<string>("");
  const [memory, setMemory] = useState<number>();
  const [graphics, setGraphics] = useState<string>("");
  const [internalStorage, setInternalStorage] = useState<string>("");
  const [operatingSystem, setOperatingSystem] = useState<string>("");
  const [weight, setWeight] = useState<number>();
  const [price, setPrice] = useState<number>();

  const lastLaptopId: number =
    parseInt(rawData[rawData.length - 1].laptop_ID) + 1;

  // Function for add new Item
  const handleAdd = () => {
    const laptop: any = {
      laptop_ID: `${lastLaptopId}`,
      Company: brand,
      Product: product,
      TypeName: type,
      Inches: `${screenSize}`,
      ScreenResolution: screenResolution,
      Cpu: processor,
      Ram: `${memory}GB`,
      Memory: internalStorage,
      Gpu: graphics,
      OpSys: operatingSystem,
      Weight: `${weight}kg`,
      Price_in_euros: `${price}`,
    };

    let hasZeroLengthElement = false; // use to check whether item empty or non-validate

    for (const key in laptop) {
      if (
        key === "Inches" ||
        key === "Ram" ||
        key === "Weight" ||
        key === "Price_in_euros"
      ) {
        switch (key) {
          case "Inches":
            if (screenSize === undefined || `${screenSize}`.length === 0) {
              hasZeroLengthElement = true;
            }
            break;
          case "Ram":
            if (memory === undefined || `${memory}`.length === 0) {
              hasZeroLengthElement = true;
            }
            break;
          case "Weight":
            if (weight === undefined || `${weight}`.length === 0) {
              hasZeroLengthElement = true;
            }
            break;
          case "Price_in_euros":
            if (price === undefined || `${price}`.length === 0) {
              hasZeroLengthElement = true;
            }
            break;

          default:
            break;
        }
      } else {
        if (laptop[key].length === 0) {
          hasZeroLengthElement = true;
          break;
        }
      }
    }

    if (!hasZeroLengthElement) {
      addLaptop(laptop);
      setIsAddData(true);
      onClose();
    }
  };

  useEffect(() => {
    setTableData(rawData); //use Trigger to update tableData when add a item to raw data
  }, [isAddData]);

  return (
    <div>
      <form>
        <div className="border-b-2 pb-3">
          <span className="flex pl-3  text-basic font-bold">BASIC DETAILS</span>
          <div className="grid gap-5 grid-cols-2 p-3">
            <div>
              <FormLabelInput
                value={brand}
                onChange={(e: any) => setBrand(e.target.value)}
                id={"brand"}
                placeholder={"Hp"}
                required={true}
                label={"Brand"}
              />
            </div>
            <div>
              <FormLabelInput
                value={product}
                onChange={(e: any) => setProduct(e.target.value)}
                id={"product"}
                placeholder={"envy"}
                required={true}
                label={"Product"}
              />
            </div>
            <FormLabelInput
              value={type}
              onChange={(e: any) => setType(e.target.value)}
              id={"type"}
              placeholder={"NoteBook"}
              required={true}
              label={"Type"}
            />

            <div>
              <FormLabelNumberInput
                value={price}
                symbol={"€"}
                setValue={setPrice}
                id={"price"}
                placeholder={"1200"}
                required={true}
                label={"Price"}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <span className="flex pl-3 pt-3 text-basic font-bold ">
              FEATURES
            </span>
            <div className="grid gap-5 grid-cols-2 p-3">
              <div>
                <FormLabelNumberInput
                  value={screenSize}
                  symbol={"in"}
                  setValue={setScreenSize}
                  id={"screen_size"}
                  placeholder={"15.6"}
                  required={true}
                  label={"Screen Size"}
                />
              </div>
              <div>
                <FormLabelInput
                  value={screenResolution}
                  onChange={(e: any) => setScreenResolution(e.target.value)}
                  id={"screen_resolution"}
                  placeholder={"Full HD 1920x1080"}
                  required={true}
                  label={"Screen Resolution"}
                />
              </div>
              <div>
                <FormLabelInput
                  value={graphics}
                  onChange={(e: any) => setGraphics(e.target.value)}
                  id={"graphics"}
                  placeholder={"Nvidia GeForce 930MX"}
                  required={true}
                  label={"Graphics"}
                />
              </div>
              <div>
                <FormLabelInput
                  value={processor}
                  onChange={(e: any) => setProcessor(e.target.value)}
                  id={"processor"}
                  placeholder={"Intel Core i7 8550U 1.8GHz"}
                  required={true}
                  label={"Processor"}
                />
              </div>
              <div>
                <FormLabelNumberInput
                  value={memory}
                  symbol={"GB"}
                  setValue={setMemory}
                  id={"memory"}
                  placeholder={"8"}
                  required={true}
                  label={"Memory"}
                />
              </div>
              <div>
                <FormLabelInput
                  value={internalStorage}
                  onChange={(e: any) => setInternalStorage(e.target.value)}
                  id={"internal_storage"}
                  placeholder={"256GB SSD"}
                  required={true}
                  label={"Internal Storage"}
                />
              </div>
              <div>
                <FormLabelInput
                  value={operatingSystem}
                  onChange={(e: any) => setOperatingSystem(e.target.value)}
                  id={"operating_system"}
                  placeholder={"Windows 10"}
                  required={true}
                  label={"Operating System"}
                />
              </div>
              <div>
                <FormLabelNumberInput
                  value={weight}
                  symbol={"kg"}
                  setValue={setWeight}
                  id={"weight"}
                  placeholder={"1.38"}
                  required={true}
                  label={"Weight"}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handleAdd}
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-2"
          >
            ADD ITEM
          </button>
        </div>
      </form>
    </div>
  );
}
