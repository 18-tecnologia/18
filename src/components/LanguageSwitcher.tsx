import { useLanguage } from "@/locales/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languageOptions = [
  { value: "pt-BR", label: "Português", flag: "/flags/br.png" },
  { value: "en-US", label: "English", flag: "/flags/us.png" },
  { value: "zh-CN", label: "中文", flag: "/flags/ch.png" },
  { value: "ja-JP", label: "日本語", flag: "/flags/jp.png" },
  { value: "ko-KR", label: "한국어", flag: "/flags/ko.png" },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const currentLanguage = languageOptions.find((l) => l.value === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="w-6 h-4 flex items-center justify-center">
          <img
            src={currentLanguage?.flag}
            alt={currentLanguage?.label}
            className="w-full h-full object-cover"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setLanguage(option.value as "pt-BR" | "en-US" | "zh-CN" | "ja-JP" | "ko-KR")}
            className="flex items-center cursor-pointer"
          >
            <img
              src={option.flag}
              alt={option.label}
              className="w-6 h-4 mr-2 border"
            />
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};