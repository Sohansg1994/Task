import FormLabelInput from "../../molecules/formLabelInput/FormLabelInput";
import laptopStore from "../../../store";
import FormLabelNumberInput from "../../molecules/formLabelNumberInput/FormLabelNumberInput";
import { useState } from "react";

export default function EditForm(props: any) {
  const id = props.laptopData.laptop_ID;
  const onClose = props.onClose;
  const rawData = laptopStore((state) => state.rawData);
  const tableData = laptopStore((state) => state.tableData);
  const setIsDataEdited = laptopStore((state) => state.setIsDataEdited);
  const isDataEdited = laptopStore((state) => state.isDataEdited);

  const [brand, setBrand] = useState<string>(props.laptopData.Company);
  const [product, setProduct] = useState<string>(props.laptopData.Product);
  const [type, setType] = useState<string>(props.laptopData.TypeName);
  const [screenSize, setScreenSize] = useState<number>(
    parseFloat(props.laptopData.Inches)
  );
  const [screenResolution, setScreenResolution] = useState<string>(
    props.laptopData.ScreenResolution
  );
  const [processor, setProcessor] = useState<string>(props.laptopData.Cpu);
  const [memory, setMemory] = useState<number>(
    parseFloat(props.laptopData.Ram)
  );
  const [graphics, setGraphics] = useState<string>(props.laptopData.Gpu);
  const [internalStorage, setInternalStorage] = useState<string>(
    props.laptopData.Memory
  );
  const [operatingSystem, setOperatingSystem] = useState<string>(
    props.laptopData.OpSys
  );
  const [weight, setWeight] = useState<number>(
    parseFloat(props.laptopData.Weight)
  );
  const [price, setPrice] = useState<number>(
    parseFloat(props.laptopData.Price_in_euros)
  );

  const handleEdit = () => {
    const laptop: any = {
      laptop_ID: `${id}`,
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

    const indexRawData = rawData.findIndex((laptop) => laptop.laptop_ID === id);
    const indexTableData = tableData.findIndex(
      (laptop) => laptop.laptop_ID === id
    );
    rawData[indexRawData] = laptop;
    tableData[indexTableData] = laptop;
    setIsDataEdited(isDataEdited);
    onClose();
  };

  return (
    <div>
      <form>
        <div className="border-b-2 pb-3">
          <span className="flex pl-3  text-basic font-bold">BASIC DETAILS</span>
          <div className="grid gap-5  md:grid-cols-2 p-3">
            <div>
              <FormLabelInput
                value={brand}
                onChange={(e: any) => setBrand(e.target.value)}
                id={"brand"}
                placeholder={""}
                required={true}
                label={"Brand"}
              />
            </div>
            <div>
              <FormLabelInput
                value={product}
                onChange={(e: any) => setProduct(e.target.value)}
                id={"product"}
                placeholder={""}
                required={true}
                label={"Product"}
              />
            </div>
            <FormLabelInput
              value={type}
              onChange={(e: any) => setType(e.target.value)}
              id={"type"}
              placeholder={""}
              required={true}
              label={"Type"}
            />

            <div>
              <FormLabelNumberInput
                value={price}
                symbol={"€"}
                setValue={setPrice}
                id={"price"}
                placeholder={""}
                required={true}
                label={"Price"}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <span className="flex pl-3 pt-3 text-basic font-bold">
              FEATURES
            </span>
            <div className="grid gap-5  md:grid-cols-2 p-3">
              <div>
                <FormLabelNumberInput
                  value={screenSize}
                  symbol={"in"}
                  setValue={setScreenSize}
                  id={"screen_size"}
                  placeholder={""}
                  required={true}
                  label={"Screen Size"}
                />
              </div>
              <div>
                <FormLabelInput
                  value={screenResolution}
                  onChange={(e: any) => setScreenResolution(e.target.value)}
                  id={"screen_resolution"}
                  placeholder={""}
                  required={true}
                  label={"Screen Resolution"}
                />
              </div>
              <div>
                <FormLabelInput
                  value={graphics}
                  onChange={(e: any) => setGraphics(e.target.value)}
                  id={"graphics"}
                  placeholder={""}
                  required={true}
                  label={"Graphics"}
                />
              </div>
              <div>
                <FormLabelInput
                  value={processor}
                  onChange={(e: any) => setProcessor(e.target.value)}
                  id={"processor"}
                  placeholder={""}
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
                  placeholder={""}
                  required={true}
                  label={"Memory"}
                />
              </div>
              <div>
                <FormLabelInput
                  value={internalStorage}
                  onChange={(e: any) => setInternalStorage(e.target.value)}
                  id={"internal_storage"}
                  placeholder={""}
                  required={true}
                  label={"Internal Storage"}
                />
              </div>
              <div>
                <FormLabelInput
                  value={operatingSystem}
                  onChange={(e: any) => setOperatingSystem(e.target.value)}
                  id={"operating_system"}
                  placeholder={""}
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
                  placeholder={""}
                  required={true}
                  label={"Weight"}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handleEdit}
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-2"
          >
            EDIT ITEM
          </button>
        </div>
      </form>
    </div>
  );
}
