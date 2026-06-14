import { Sparkles } from './Icons';

interface TipBoxProps {
  message: string;
}

export function TipBox({ message }: TipBoxProps) {
  return (
    <div className="glass-green rounded-xl p-4 flex items-start gap-3 mt-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-400/20 flex items-center justify-center mt-0.5">
        <Sparkles className="w-5 h-5 text-green-600" />
      </div>
      <div>
        <p className="text-sm font-bold text-green-800 mb-0.5">نکته کلیدی</p>
        <p className="text-sm text-green-700 leading-relaxed">{message}</p>
      </div>
    </div>
  );
}
