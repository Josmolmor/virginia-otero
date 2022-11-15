type AlertProps = {
  preview: boolean;
};

export default function Alert({ preview }: AlertProps) {
  return (
    <article>
      <div>
        <div>
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a href='/api/exit-preview'>Click here</a> to exit preview mode.
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </article>
  );
}
