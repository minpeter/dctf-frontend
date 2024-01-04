import { useState, useCallback } from "react";

import { toast } from "sonner";

import { Card, CardContent } from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { updateChallenge, deleteChallenge, uploadFiles } from "@/api/admin";
// import { encodeFile } from "../../util";
// import Modal from "@/components/modal";
// const DeleteModal = ({ open, onClose, onDelete }) => {
//   const wrappedOnClose = useCallback(
//     (e:any) => {
//       e.preventDefault();
//       onClose();
//     },
//     [onClose]
//   );
//   const wrappedOnDelete = useCallback(
//     (e:any) => {
//       e.preventDefault();
//       onDelete();
//     },
//     [onDelete]
//   );

//   return (
//     <Modal open={open} onClose={onClose}>
//       <div className="modal-header">
//         <div className="modal-title">Delete Challenge?</div>
//       </div>
//       <div className={`modal-body `}>
//         This is an irreversible action that permanently deletes the challenge
//         and revokes all solves.
//         <div>
//           <div className="btn-container u-inline-block mt-2">
//             <button type="button" className="btn--sm mr-1" onClick={wrappedOnClose}>
//               Cancel
//             </button>
//           </div>
//           <div className="btn-container u-inline-block">
//             <button
//               type="submit"
//               className="btn--sm btn-danger"
//               onClick={wrappedOnDelete}
//             >
//               Delete Challenge
//             </button>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// };
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

function onSubmit(data: z.infer<typeof FormSchema>) {
  // toast({
  //   title: "You submitted the following values:",
  //   description: (
  //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //     </pre>
  //   ),
  // });

  toast.success("Success!");
}

export default function AdminProblem({
  problem,
  update: updateClient,
  delete: deleteClient,
}: {
  problem: any;
  update: any;
  delete: any;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });
  console.log(problem);
  const [flag, setFlag] = useState(problem.flag);
  const handleFlagChange = useCallback((e: any) => setFlag(e.target.value), []);

  const [description, setDescription] = useState(problem.description);
  const handleDescriptionChange = useCallback(
    (e: any) => setDescription(e.target.value),
    []
  );

  const [category, setCategory] = useState(problem.category);
  const handleCategoryChange = useCallback(
    (e: any) => setCategory(e.target.value),
    []
  );

  const [author, setAuthor] = useState(problem.author);
  const handleAuthorChange = useCallback(
    (e: any) => setAuthor(e.target.value),
    []
  );

  const [name, setName] = useState(problem.name);
  const handleNameChange = useCallback((e: any) => setName(e.target.value), []);

  const [minPoints, setMinPoints] = useState(problem.points.min);
  const handleMinPointsChange = useCallback(
    (e: any) => setMinPoints(Number.parseInt(e.target.value)),
    []
  );

  const [maxPoints, setMaxPoints] = useState(problem.points.max);
  const handleMaxPointsChange = useCallback(
    (e: any) => setMaxPoints(Number.parseInt(e.target.value)),
    []
  );

  const [tiebreakEligible, setTiebreakEligible] = useState(
    problem.tiebreakEligible !== false
  );
  const handleTiebreakEligibleChange = useCallback(
    (e: any) => setTiebreakEligible(e.target.checked),
    []
  );

  // const [image, setImage] = useState(problem.dklodd.image);
  // const handleImageChange = useCallback(
  //   (e: any) => setImage(e.target.value),
  //   []
  // );

  // const [type, setType] = useState(problem.dklodd.type);
  // const handleTypeChange = useCallback((e: any) => setType(e.target.value), []);

  // const handleFileUpload = useCallback(
  //   async (e:any) => {
  //     e.preventDefault();

  //     const fileData = await Promise.all(
  //       Array.from(e.target.files).map(async (file) => {
  //         const data = await encodeFile(file);

  //         return {
  //           data,
  //           name: file.name,
  //         };
  //       })
  //     );

  //     const fileUpload = await uploadFiles({
  //       files: fileData,
  //     });

  //     if (fileUpload.error) {
  //       toast.error(fileUpload.error);
  //       return;
  //     }

  //     const data = await updateChallenge({
  //       id: problem.id,
  //       data: {
  //         files: fileUpload.data.concat(problem.files),
  //       },
  //     });

  //     e.target.value = null;

  //     updateClient({
  //       problem: data,
  //     });

  //     toast.success("Problem successfully updated");
  //   },
  //   [problem.id, problem.files, updateClient]
  // );

  const handleRemoveFile = (file: any) => async () => {
    const newFiles = problem.files.filter((f: any) => f !== file);

    const data = await updateChallenge({
      id: problem.id,
      data: {
        files: newFiles,
      },
    });

    updateClient({
      problem: data,
    });

    toast.success("Problem successfully updated");
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    const data = await updateChallenge({
      id: problem.id,
      data: {
        flag,
        description,
        category,
        author,
        name,
        tiebreakEligible,
        points: {
          min: minPoints,
          max: maxPoints,
        },
        // dklodd: {
        //   image,
        //   type,
        // },
      },
    });

    updateClient({
      problem: data,
    });

    toast.success("Problem successfully updated");
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const openDeleteModal = useCallback((e: any) => {
    e.preventDefault();
    setIsDeleteModalOpen(true);
  }, []);
  const closeDeleteModal = useCallback(() => {
    setIsDeleteModalOpen(false);

    deleteClient({
      problem,
    });
  }, []);
  const handleDelete = useCallback(() => {
    const action = async () => {
      await deleteChallenge({
        id: problem.id,
      });

      toast.success(`${problem.name} successfully deleted`);

      closeDeleteModal();
    };
    action();
  }, [problem, closeDeleteModal]);

  return (
    <>
      <Card>
        <CardContent>
          <form onSubmit={handleUpdate} className="frame__body p-0">
            <div className="p-0 u-flex u-flex-column u-gap-1">
              <input
                // autocomplete="off"
                // autocorrect="off"
                required
                className="form-group-input input-small"
                placeholder="Category"
                value={category}
                onChange={handleCategoryChange}
              />
              <input
                // autocomplete="off"
                // autocorrect="off"
                required
                className="form-group-input input-small"
                placeholder="Problem Name"
                value={name}
                onChange={handleNameChange}
              />
              <div className="form-ext-control form-ext-checkbox">
                <input
                  id={`chall-${problem.id}-tiebreak-eligible`}
                  type="checkbox"
                  className="form-ext-input"
                  checked={tiebreakEligible}
                  onChange={handleTiebreakEligibleChange}
                />
                <label
                  // for={`chall-${problem.id}-tiebreak-eligible`}
                  className="form-ext-label"
                >
                  Eligible for tiebreaks?
                </label>
              </div>
              <input
                // autocomplete="off"
                // autocorrect="off"
                required
                className="form-group-input input-small"
                placeholder="Author"
                value={author}
                onChange={handleAuthorChange}
              />
              <input
                className="form-group-input input-small"
                type="number"
                required
                value={minPoints}
                onChange={handleMinPointsChange}
              />
              <input
                className="form-group-input input-small"
                type="number"
                required
                value={maxPoints}
                onChange={handleMaxPointsChange}
              />
            </div>

            <div className="divider" />

            <textarea
              // autocomplete="off"
              // autocorrect="off"
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
              className="p-2"
            />
            <div className="input-control">
              <input
                // autocomplete="off"
                // autocorrect="off"
                required
                className="form-group-input input-small"
                placeholder="Flag"
                value={flag}
                onChange={handleFlagChange}
              />
            </div>

            {problem.files.length !== 0 && (
              <div>
                <p className={`frame__subtitle m-0  `}>Downloads</p>
                <div className="tag-container">
                  {problem.files.map((file: any) => {
                    return (
                      <div className="tag" key={file.url}>
                        <a download href={file.url}>
                          {file.name}
                        </a>
                        <div
                          className="tag tag--delete"
                          // style="margin: 0; margin-left: 3px"
                          onClick={handleRemoveFile(file)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* <div className="input-control">
            <input
              className="form-group-input input-small"
              type="file"
              multiple
              onChange={handleFileUpload}
            />
          </div> */}

            <div className="divider" />

            {/* 옵션으로 DKLODD IMAGE 입력 필드와 TYPE (web or tcp) 선택 */}
            {/* <div className="input-control">
            <input
              // autocomplete="off"
              // autocorrect="off"
              className="form-group-input input-small"
              placeholder="Container IMAGE"
              value={image}
              onChange={handleImageChange}
            />
            {/* 셀렉트박스로 web or tcp type 선택 */}
            {/* <select
              className="form-group-input input-small"
              value={type}
              onChange={handleTypeChange}
            >
              <option value="web">web</option>
              <option value="tcp">tcp</option>
            </select>
          </div> */}

            <button className="btn--sm btn-info mr-1">Update</button>
            <button
              className="btn--sm btn-danger"
              onClick={openDeleteModal}
              type="button"
            >
              Delete
            </button>
          </form>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      {/* <DeleteModal
        open={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onDelete={handleDelete}
      /> */}
    </>
  );
}
