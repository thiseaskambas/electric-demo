import {
  Acceleration,
  Banana,
  Braking,
  Range,
  ThousandKM,
  Weight,
} from '../TestTables';

const VersionsTests = ({ version }) => {
  return (
    <>
      {version?.acceleration && (
        <Acceleration
          tests={version.acceleration}
          className="border rounded-lg my-14 shadow-md overflow-x-auto "
        />
      )}
      {version?.thousand && (
        <ThousandKM
          tests={version.thousand}
          className="border rounded-lg my-14 shadow-md overflow-x-auto "
        />
      )}
      {version?.weight && (
        <Weight
          tests={version.weight}
          className="border rounded-lg my-14 shadow-md overflow-x-auto "
        />
      )}
      {version?.banana && (
        <Banana
          tests={version.banana}
          className="border rounded-lg my-14 shadow-md overflow-x-auto "
        />
      )}
      {version?.range && (
        <Range
          tests={version.range}
          className="border rounded-lg my-14 shadow-md overflow-x-auto "
        />
      )}
      {version?.braking && (
        <Braking
          tests={version.braking}
          className="border rounded-lg my-14 shadow-md overflow-x-auto "
        />
      )}
    </>
  );
};

export default VersionsTests;