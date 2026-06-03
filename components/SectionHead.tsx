import Label from './Label';

interface Props {
  n: string;
  title: string;
  note?: string;
}

export default function SectionHead({ n, title, note }: Props) {
  return (
    <div className="section-border-bottom">
      <Label>§ {n}</Label>
      <div className="flex items-end justify-between mt-2.5 gap-4">
        <h2 className="font-display font-normal text-[clamp(36px,5vw,60px)] text-cream leading-none tracking-[-0.5px]">
          {title}
        </h2>
        {note && (
          <span className="font-text italic text-[18px] text-muted hidden sm:block shrink-0">
            {note}
          </span>
        )}
      </div>
    </div>
  );
}
