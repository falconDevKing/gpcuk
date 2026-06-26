"use client";

interface RadioCardOption {
  value: string;
  label: string;
}

interface RadioCardGroupProps {
  options: RadioCardOption[];
  value: string;
  onValueChange: (value: string) => void;
}

export function RadioCardGroup({
  options,
  value,
  onValueChange,
}: RadioCardGroupProps) {
  return (
    <div className="flex gap-3">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition ${
            value === option.value
              ? "border-amber-400 bg-amber-50 text-zinc-900"
              : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
          }`}
          onClick={() => onValueChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
