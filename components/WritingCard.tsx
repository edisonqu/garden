import { WritingProperties } from '@/lib/utils/isWritingProperties';

import { CardHeader } from './CardHeader';

type WritingCardProps = WritingProperties;

export function WritingCard(props: WritingCardProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <CardHeader category="Writing" subcategory={props.type} url={props.url} />

      <div className="p-5">
        <h3 className="font-serif-variation font-serif text-3xl font-light">
          {props.title}
        </h3>
        <span className="mt-2 mb-4 block text-sm italic -tracking-[0.03em] text-neutral-400">
          {props.publishedOn}
        </span>
        <p className="leading-relaxed text-neutral-700 line-clamp-4">
          {props.contentPreview}
        </p>
      </div>
    </div>
  );
}
