export default function ZipCodeEntry({
  onZipCodeChange,
}: {
  onZipCodeChange: any;
}) {
  return (
    <label>
      Zip Code <input onChange={onZipCodeChange}></input>
    </label>
  );
}
