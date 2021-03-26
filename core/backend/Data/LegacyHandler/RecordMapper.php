<?php


namespace App\Data\LegacyHandler;


use App\Data\Entity\Record;
use App\Module\Service\ModuleNameMapperInterface;

class RecordMapper
{

    /**
     * @var ModuleNameMapperInterface
     */
    private $moduleNameMapper;

    /**
     * RecordMapper constructor.
     * @param ModuleNameMapperInterface $moduleNameMapper
     */
    public function __construct(ModuleNameMapperInterface $moduleNameMapper)
    {
        $this->moduleNameMapper = $moduleNameMapper;
    }


    /**
     * @param array $listData
     * @return Record[]
     */
    public function mapRecords(array $listData): array
    {
        $records = [];
        foreach ($listData as $key => $data) {

            $moduleName = $data['module_name'] ?? '';
            if (!empty($moduleName)) {
                $moduleName = $this->moduleNameMapper->toFrontEnd($moduleName);
            }

            $record = new Record();
            $record->setType($data['object_name'] ?? '');
            $record->setModule($moduleName);
            $record->setId($data['id'] ?? '');
            $record->setAttributes($data);
            $records[] = $record;
        }

        return $records;
    }

}