import Image from "next/image";

const NoItems = ({ title }) => {
  return (
    <div className="w-full flex flex-col  col-span-4 items-center justify-center min-h-[200px] gap-4">
      <Image
        src={"/no-items.svg"}
        width={370}
        height={320}
        className="object-cover w-auto h-auto"
        alt="no items image"
        blurDataURL="data:image/webp;base64,UklGRk4CAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggYAAAAJAHAJ0BKoIAggA/mczgarkyLSigaAMgMwlpbt0AAd0OqpNkzFd98tVUTEPEwk5mhh7Do418cDIHKkdhHffmT6r0ZeseAAD+5YKZPucJxphPwy/sQxCV9xMpm0g/qAAAAA=="
        placeholder="blur"
        quality={50}
        loading="lazy"
      />
      <p className="text-base md:text-2xl font-bold text-baseGray">{title}</p>
    </div>
  );
};
export default NoItems;
