export function useEnterKey(
  filteredOptions,
  highlightedIndex,
  handleSelect,
  languageIs,
  govFromReg,
  govNum,
  setHighlightedIndex
) {
  const handleEnter = (e) => {
    if (e.key === "Enter" && highlightedIndex !== -1) {
      e.preventDefault();
      const selectedOption = filteredOptions[highlightedIndex];
      handleSelect({
        selectedOption: languageIs
          ? selectedOption.name_ar
          : selectedOption.name_en,
        selectedValue: selectedOption.value_en,
        selectedEnValue: selectedOption.value_en,
        numberGovFromReg:
          govFromReg === 0
            ? selectedOption.numberReg_governorate_number || 0
            : govFromReg,
        numberGov: govNum === 0 ? selectedOption.numberGov || 0 : govNum,
      });
      setHighlightedIndex(-1);
    }
  };
  return handleEnter;
}
export function useArrowNavigation(
  filteredOptions,
  highlightedIndex,
  setHighlightedIndex
) {
  const handleArrowDown = () => {
    if (highlightedIndex < filteredOptions.length - 1) {
      setHighlightedIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleArrowUp = () => {
    if (highlightedIndex > 0) {
      setHighlightedIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      handleArrowDown();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      handleArrowUp();
    }
  };

  return handleKeyDown;
}
