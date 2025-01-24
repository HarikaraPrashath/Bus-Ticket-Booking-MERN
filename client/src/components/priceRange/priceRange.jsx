import React, {
    useCallback,
    useEffect,
    useState,
    useRef
} from 'react';

const valueCSS = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    gap: "2px",
    paddingTop: "10px",
};

const PriceRangeSlider = ({
    min,
    max,
    trackColor = "#cecece",
    onChange,
    rangeColor = "#3B82F6",
    valueStyle = valueCSS,
    width = "200px", // Reduced width for a smaller slider
    currencyText = "$",
}) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    useEffect(() => {
        if (minVal != minValRef.current || maxVal != maxValRef.current) {
            onChange({ min: minVal, max: maxVal });
            minValRef.current = minVal;
            maxValRef.current = maxVal;
        }
    }, [minVal, maxVal, onChange]);

    return (
        <div className='w-full flex items-center justify-center text-black flex-col space-y-8'>
            {/* Display Price Value */}
            <div className="w-[200px] px-4 flex items-center justify-between gap-x-5">
                <p className="text-lg font-semibold">{currencyText} {minVal}</p>
                <div className="flex-1 border-dashed border border-white mt-1"></div>
                <p className="text-lg font-semibold">{currencyText} {maxVal}</p>
            </div>

            {/* Style the price range slider */}
            <div className="multi-slide-input-container" style={{ width }}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={(event) => {
                        const value = Math.min(Number(event.target.value), maxVal - 1);
                        setMinVal(value);
                    }}
                    className="thumb thumb-left text-black"
                    style={{
                        width,
                        zIndex: minVal > max - 100 || minVal === maxVal ? 5 : undefined,
                    }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={(event) => {
                        const value = Math.max(Number(event.target.value), minVal + 1);
                        setMaxVal(value);
                    }}
                    className="thumb thumb-right"
                    style={{
                        width,
                        zIndex: minVal > max - 100 || minVal === maxVal ? 4 : undefined,
                    }}
                />
                <div className="slider">
                    <div
                        style={{ backgroundColor: trackColor }}
                        className="track-slider"
                    />
                    <div
                        ref={range}
                        style={{ backgroundColor: rangeColor }}
                        className="range-slider"
                    />
                </div>
            </div>
        </div>
    );
};

export default PriceRangeSlider;
