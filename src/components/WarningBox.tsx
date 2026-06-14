import { AlertTriangle } from './Icons';

interface WarningBoxProps {
  message: string;
}

export function WarningBox({ message }: WarningBoxProps) {
  return (
    <div className="glass-yellow rounded-xl p-4 flex items-start gap-3 mt-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-yellow-400/20 flex items-center justify-center mt-0.5">
        <AlertTriangle className="w-5 h-5 text-yellow-600" />
      </div>
      <div>
        <p className="text-sm font-bold text-yellow-800 mb-0.5">هشدار مهم</p>
        <p className="text-sm text-yellow-700 leading-relaxed">{message}</p>
      </div>
    </div>
  );
}
